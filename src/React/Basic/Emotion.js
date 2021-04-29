"use strict";

const Emotion = require("@emotion/react");
const createElement = Emotion.jsx;

exports.emptyStyle = undefined;

exports.emptyStyleProperty = undefined;

const flattenDataProp = (component, props) => {
  let data = null;
  if (typeof component === "string" && props._data != null) {
    data = { _data: undefined };
    Object.entries(props._data).forEach(function(entry) {
      data["data-" + entry[0]] = entry[1];
    });
  }
  return data == null ? props : Object.assign({}, props, data);
};

exports.createElement_ = (component, props, areChildrenDynamic) => {
  const args = [component, flattenDataProp(component, props)];
  return createElement.apply(
    null,
    areChildrenDynamic || props.children == null
      ? args
      : args.concat(props.children)
  );
};


exports.global = Emotion.Global;

exports.css_ = Emotion.css;

exports.important = prop => typeof prop === "string" ? prop + " !important" : prop;

exports.keyframes_ = Emotion.keyframes;
