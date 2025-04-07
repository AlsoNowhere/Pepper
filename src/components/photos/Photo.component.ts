import {
  component,
  div,
  mIf,
  MintScope,
  mRef,
  node,
  refresh,
  span,
} from "mint";

class PhotoComponent extends MintScope {
  imgLoaded: boolean;
  classes: string;
  imgElementRef: HTMLImageElement;

  constructor() {
    super();

    this.oninit = function () {
      const that = this;
      const img = new Image();
      img.onload = function () {
        that.imgLoaded = true;
        refresh(that);
        const { clientWidth: width, clientHeight: height } = that.imgElementRef;
        if (width > height) {
          that.classes = "width-full";
        } else {
          that.classes = "height-full";
        }
        refresh(that);
      };
      img.src = this.src;
    };

    this.imgLoaded = false;

    this.classes = "";
  }
}

export const Photo = component(
  "div",
  PhotoComponent,
  {
    class: "photo absolute middle bo-rder",
    style: "width: calc(100% - 7px); height: calc(100% - 7px);",
  },
  div(
    {
      class: "relative",
      style: "width: calc(100% - 1px); height: calc(100% - 1px);",
    },
    [
      node("img", {
        ...mIf("imgLoaded"),
        "[src]": "src",
        class: "absolute middle {classes}",
        ...mRef("imgElementRef"),
      }),
      span(
        { class: "absolute middle font-size-small bold snow-text-shadow" },
        "{name}"
      ),
    ]
  )
);
