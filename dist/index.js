import { defineComponent, resolveComponent, openBlock, createBlock, computed, createCommentVNode, renderSlot, ref, onMounted, Fragment, renderList, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString, toRefs, watch, onUpdated, createVNode } from 'vue';
import 'core-js/modules/es.array.filter.js';
import 'core-js/modules/es.array.includes.js';
import 'core-js/modules/es.array.some.js';
import 'core-js/modules/es.object.values.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'core-js/modules/es.function.name.js';
import 'core-js/modules/es.array.concat.js';
import 'core-js/modules/es.number.constructor.js';
import { slice, isPlainObject } from 'lodash-es';
import 'core-js/modules/es.number.is-finite.js';
import 'core-js/modules/es.array.every.js';
import 'core-js/modules/es.array.reduce.js';
import 'core-js/modules/es.object.keys.js';
import defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import { createPopper } from '@popperjs/core';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Config = function Config() {
  _classCallCheck(this, Config);
};
Config.ABBR = "birdbrain";

var Type;

(function (Type) {
  Type["Primary"] = "primary";
  Type["Secondary"] = "secondary";
  Type["Info"] = "info";
  Type["Success"] = "success";
  Type["Danger"] = "danger";
  Type["Warning"] = "warning";
  Type["Dark"] = "dark";
  Type["Light"] = "light";
})(Type || (Type = {}));

library.add(fas);
var DISABLED_ICONS = ["font-awesome-logo-full"];
var icons = Object.values(fas).filter(function (_ref) {
  var iconName = _ref.iconName;
  return !DISABLED_ICONS.includes(iconName);
});
var script = defineComponent({
  name: "Icon",
  props: {
    name: {
      type: String,
      required: true,
      validator: function validator(value) {
        return icons.some(function (_ref2) {
          var iconName = _ref2.iconName;
          return iconName === value;
        });
      }
    },
    spin: Boolean
  },
  components: {
    FontAwesomeIcon: FontAwesomeIcon
  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_FontAwesomeIcon = resolveComponent("FontAwesomeIcon");

  return openBlock(), createBlock(_component_FontAwesomeIcon, {
    icon: ['fas', _ctx.name],
    spin: _ctx.spin
  }, null, 8, ["icon", "spin"]);
}

script.render = render;

var script$1 = defineComponent({
  props: {
    type: {
      type: String,
      default: Type.Warning
    },
    outline: Boolean,
    text: Boolean,
    icon: [String, Boolean],
    inline: Boolean
  },
  components: {
    Icon: script
  },
  setup: function setup(props) {
    var styling = computed(function () {
      var _ref;

      var element = "".concat(Config.ABBR, "-alert");
      var typeModifier = "--".concat(props.type);
      return _ref = {}, _defineProperty(_ref, element, true), _defineProperty(_ref, element + typeModifier, true), _defineProperty(_ref, element + "--inline", props.inline), _defineProperty(_ref, element + typeModifier + "--outline", props.outline), _defineProperty(_ref, element + typeModifier + "--text", props.text), _ref;
    });
    var iconStyling = computed(function () {
      var element = "".concat(Config.ABBR, "-alert__icon");
      return _defineProperty({}, element, true);
    });
    var iconName = computed(function () {
      if (props.icon) {
        return props.icon;
      }

      switch (props.type) {
        case Type.Danger:
          return "times-circle";

        case Type.Warning:
          return "exclamation-triangle";

        case Type.Success:
          return "check-circle";

        default:
          return "info-circle";
      }
    });
    return {
      iconName: iconName,
      styling: styling,
      iconStyling: iconStyling
    };
  }
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Icon = resolveComponent("Icon");

  return openBlock(), createBlock("div", {
    class: _ctx.styling
  }, [_ctx.icon !== false ? (openBlock(), createBlock(_component_Icon, {
    key: 0,
    name: _ctx.iconName,
    class: _ctx.iconStyling
  }, null, 8, ["name", "class"])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default")], 2);
}

script$1.render = render$1;

var script$2 = defineComponent({
  props: {
    type: {
      type: String,
      default: Type.Primary
    }
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var isImage = ref(false);
    onMounted(function () {
      if (slots !== null && slots !== void 0 && slots.default) {
        isImage.value = slots.default().some(function (_ref2) {
          var type = _ref2.type;
          return type === "img";
        });
      }
    });
    var styling = computed(function () {
      var _ref3;

      var element = "".concat(Config.ABBR, "-avatar");
      var type = "".concat(element, "--").concat(props.type);
      return _ref3 = {}, _defineProperty(_ref3, element, true), _defineProperty(_ref3, type, true), _defineProperty(_ref3, element + "--image", isImage.value), _ref3;
    });
    return {
      styling: styling
    };
  }
});

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    class: _ctx.styling
  }, [renderSlot(_ctx.$slots, "default")], 2);
}

script$2.render = render$2;

var script$3 = defineComponent({
  components: {
    Avatar: script$2
  },
  props: {
    min: {
      type: [String, Number],
      default: 0
    },
    max: {
      type: [String, Number],
      default: 3
    },
    narrow: Boolean
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var avatars = ref([]);
    onMounted(function () {
      if (slots !== null && slots !== void 0 && slots.default) {
        avatars.value = slots.default();
      }
    });
    var isGrouped = computed(function () {
      return avatars.value.length >= Number(props.min);
    });
    var slicedAvatars = computed(function () {
      return slice(avatars.value, 0, Number(props.max));
    });
    var styling = computed(function () {
      var _ref2;

      var element = "".concat(Config.ABBR, "-avatar-group");
      return _ref2 = {}, _defineProperty(_ref2, element, true), _defineProperty(_ref2, element + "--grouped", isGrouped.value), _defineProperty(_ref2, element + "--narrow", props.narrow), _ref2;
    });
    var avatarStyling = computed(function () {
      var element = "".concat(Config.ABBR, "-avatar-group__rest");
      return _defineProperty({}, element, true);
    });
    return {
      avatars: avatars,
      slicedAvatars: slicedAvatars,
      styling: styling,
      avatarStyling: avatarStyling
    };
  }
});

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Avatar = resolveComponent("Avatar");

  return openBlock(), createBlock("div", {
    class: _ctx.styling
  }, [ createCommentVNode("", true), (openBlock(true), createBlock(Fragment, null, renderList(_ctx.slicedAvatars, function (avatar, index) {
    return openBlock(), createBlock(resolveDynamicComponent(avatar), {
      key: avatar,
      style: {
        'z-index': 99 - index
      }
    }, null, 8, ["style"]);
  }), 128)), _ctx.avatars.length > _ctx.max ? (openBlock(), createBlock(_component_Avatar, {
    key: 1,
    type: "dark",
    class: _ctx.avatarStyling
  }, {
    default: withCtx(function () {
      return [createTextVNode("+" + toDisplayString(_ctx.avatars.length - _ctx.max), 1)];
    }),
    _: 1
  }, 8, ["class"])) : createCommentVNode("", true)], 2);
}

script$3.render = render$3;

var Position;

(function (Position) {
  Position["TopLeft"] = "top-left";
  Position["TopRight"] = "top-right";
  Position["BottomRight"] = "bottom-right";
  Position["BottomLeft"] = "bottom-left";
})(Position || (Position = {}));

var script$4 = defineComponent({
  props: {
    type: {
      type: String,
      default: Type.Danger
    },
    value: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 0
    },
    min: {
      type: [Number, String],
      default: 0
    },
    pulse: Boolean,
    dot: Boolean,
    position: {
      type: String,
      default: Position.TopRight
    }
  },
  setup: function setup(props) {
    var isNumber = function isNumber(value) {
      return !!value && (typeof value === "number" || Number.isFinite(parseInt(value, 10)));
    };

    var isVisible = computed(function () {
      var isAboveMin = Number(props.value) >= Number(props.min);
      var isBelowMax = Number(props.value) <= Number(props.max);
      return !isNumber(props.value) || isNumber(props.value) && isAboveMin && (!props.dot || props.dot && isBelowMax);
    });
    var parsedValue = computed(function () {
      var value = isNumber(props.value) ? Number(props.value) : props.value;
      var max = Number(props.max);
      return max && value > max ? "".concat(max, "+") : value;
    });
    var styling = computed(function () {
      var _ref;

      var element = "".concat(Config.ABBR, "-badge");
      var type = "".concat(element, "--").concat(props.type);
      var position = "".concat(element, "--").concat(props.position);
      return _ref = {}, _defineProperty(_ref, element, true), _defineProperty(_ref, type, true), _defineProperty(_ref, position, true), _defineProperty(_ref, type + "--pulse", props.pulse), _defineProperty(_ref, element + "--dot", props.dot), _defineProperty(_ref, element + "--pulse", props.pulse), _ref;
    });
    var indicatorStyling = computed(function () {
      var element = "".concat(Config.ABBR, "-badge__indicator");
      return _defineProperty({}, element, true);
    });
    return {
      isVisible: isVisible,
      parsedValue: parsedValue,
      styling: styling,
      indicatorStyling: indicatorStyling
    };
  }
});

var _hoisted_1 = {
  key: 0
};
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    class: _ctx.styling
  }, [renderSlot(_ctx.$slots, "default"), _ctx.isVisible ? (openBlock(), createBlock("div", {
    key: 0,
    class: _ctx.indicatorStyling
  }, [!_ctx.dot ? (openBlock(), createBlock("span", _hoisted_1, toDisplayString(_ctx.parsedValue), 1)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)], 2);
}

script$4.render = render$4;

var script$5 = defineComponent({
  props: {
    type: {
      type: String,
      default: Type.Primary
    },
    block: Boolean,
    outline: Boolean,
    text: Boolean,
    disabled: Boolean,
    loading: Boolean
  },
  components: {
    Icon: script
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var ICON_COMPONENT_NAME = "Icon";

    var _toRefs = toRefs(props),
        loading = _toRefs.loading;

    var root = ref(null);
    var width = ref(null);
    var height = ref(null);
    var isIcon = ref(false);
    var isIconFirst = ref(false);
    var isIconLast = ref(false);
    var isIconOnly = ref(false);
    var isLoading = ref(false);

    var onLoadingChange = function onLoadingChange(current, previous) {
      var getPropertyValue = function getPropertyValue(property) {
        return !previous && current ? window.getComputedStyle(root.value).getPropertyValue(property) : null;
      };

      width.value = getPropertyValue("width");
      height.value = getPropertyValue("height");
      isLoading.value = current;
    };

    onMounted(function () {
      if (slots !== null && slots !== void 0 && slots.default) {
        var children = slots.default();

        var isComponentLikeNode = function isComponentLikeNode(node) {
          return typeof node.type !== "string";
        };

        var isIconNode = function isIconNode(node) {
          return isComponentLikeNode(node) && node.type.name === ICON_COMPONENT_NAME;
        };

        isIcon.value = !props.loading && children.some(isIconNode);
        isIconFirst.value = isIcon.value && isIconNode(children[0]);
        isIconLast.value = isIcon.value && !isIconFirst.value;
        isIconOnly.value = isIcon.value && children.every(isIconNode);
      }

      if (loading.value) {
        onLoadingChange(true, false);
      }
    });
    watch(loading, onLoadingChange);
    var styling = computed(function () {
      var _ref2;

      var element = "".concat(Config.ABBR, "-button");
      var typeModifier = "--".concat(props.type);
      return _ref2 = {}, _defineProperty(_ref2, element + "", true), _defineProperty(_ref2, element + "--icon", isIcon.value), _defineProperty(_ref2, element + "--icon--first", !isIconOnly.value && isIconFirst.value), _defineProperty(_ref2, element + "--icon--last", !isIconOnly.value && isIconLast.value), _defineProperty(_ref2, element + "--block", props.block), _defineProperty(_ref2, element + typeModifier, true), _defineProperty(_ref2, element + typeModifier + "--outline", props.outline), _defineProperty(_ref2, element + typeModifier + "--text", props.text), _ref2;
    });
    return {
      root: root,
      width: width,
      height: height,
      isIcon: isIcon,
      isIconFirst: isIconFirst,
      isIconLast: isIconLast,
      isIconOnly: isIconOnly,
      isLoading: isLoading,
      styling: styling
    };
  }
});

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Icon = resolveComponent("Icon");

  return openBlock(), createBlock("button", {
    type: "button",
    class: _ctx.styling,
    style: {
      width: _ctx.width,
      height: _ctx.height
    },
    disabled: _ctx.disabled,
    ref: "root"
  }, [!_ctx.isLoading ? renderSlot(_ctx.$slots, "default", {
    key: 0
  }) : (openBlock(), createBlock(_component_Icon, {
    key: 1,
    name: "spinner",
    spin: ""
  }))], 14, ["disabled"]);
}

script$5.render = render$5;

var script$6 = defineComponent({
  props: {
    fluid: Boolean,
    center: Boolean
  },
  setup: function setup(props) {
    var styling = computed(function () {
      var _ref;

      var element = "".concat(Config.ABBR, "-container");
      return _ref = {}, _defineProperty(_ref, element, true), _defineProperty(_ref, element + "--fluid", props.fluid), _defineProperty(_ref, element + "--center", props.center), _ref;
    });
    return {
      styling: styling
    };
  }
});

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    class: _ctx.styling
  }, [renderSlot(_ctx.$slots, "default")], 2);
}

script$6.render = render$6;

var script$7 = defineComponent({
  setup: function setup() {
    var styling = computed(function () {
      var element = "".concat(Config.ABBR, "-grid");
      return _defineProperty({}, element, true);
    });
    return {
      styling: styling
    };
  }
});

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    class: _ctx.styling
  }, [renderSlot(_ctx.$slots, "default")], 2);
}

script$7.render = render$7;

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var Breakpoint;

(function (Breakpoint) {
  Breakpoint["Xs"] = "xs";
  Breakpoint["Sm"] = "sm";
  Breakpoint["Md"] = "md";
  Breakpoint["Lg"] = "lg";
  Breakpoint["Xl"] = "xl";
})(Breakpoint || (Breakpoint = {}));

var script$8 = defineComponent({
  props: {
    size: [String, Number],
    order: [String, Number],
    xs: [String, Number, Object],
    sm: [String, Number, Object],
    md: [String, Number, Object],
    lg: [String, Number, Object],
    xl: [String, Number, Object]
  },
  setup: function setup(props) {
    var getStylingForBreakpoints = function getStylingForBreakpoints(breakpoints) {
      return Object.keys(breakpoints).reduce(function (accumulator, breakpoint) {
        var value = breakpoints[breakpoint];

        if (isPlainObject(value)) {
          var _objectSpread2$1;

          var size = value.size,
              order = value.order;
          return _objectSpread2(_objectSpread2({}, accumulator), {}, (_objectSpread2$1 = {}, _defineProperty(_objectSpread2$1, "".concat(Config.ABBR, "-grid-col--").concat(breakpoint, "--").concat(size), Boolean(size)), _defineProperty(_objectSpread2$1, "".concat(Config.ABBR, "-grid-col--").concat(breakpoint, "--order--").concat(order), Boolean(order)), _objectSpread2$1));
        }

        return _objectSpread2(_objectSpread2({}, accumulator), {}, _defineProperty({}, "".concat(Config.ABBR, "-grid-col--").concat(breakpoint, "--").concat(value), Boolean(value)));
      }, {});
    };

    var styling = computed(function () {
      var _breakpoints, _objectSpread4;

      var element = "".concat(Config.ABBR, "-grid-col");
      var breakpoints = (_breakpoints = {}, _defineProperty(_breakpoints, Breakpoint.Xs, props.xs), _defineProperty(_breakpoints, Breakpoint.Sm, props.sm), _defineProperty(_breakpoints, Breakpoint.Md, props.md), _defineProperty(_breakpoints, Breakpoint.Lg, props.lg), _defineProperty(_breakpoints, Breakpoint.Xl, props.xl), _breakpoints);
      return _objectSpread2((_objectSpread4 = {}, _defineProperty(_objectSpread4, element, true), _defineProperty(_objectSpread4, element + "--".concat(props.size), Boolean(props.size)), _defineProperty(_objectSpread4, element + "--order--".concat(props.order), Boolean(props.order)), _objectSpread4), getStylingForBreakpoints(breakpoints));
    });
    return {
      styling: styling
    };
  }
});

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    class: _ctx.styling
  }, [renderSlot(_ctx.$slots, "default")], 2);
}

script$8.render = render$8;

var script$9 = defineComponent({
  setup: function setup() {
    var styling = computed(function () {
      var element = "".concat(Config.ABBR, "-grid-row");
      return _defineProperty({}, element, true);
    });
    return {
      styling: styling
    };
  }
});

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    class: _ctx.styling
  }, [renderSlot(_ctx.$slots, "default")], 2);
}

script$9.render = render$9;

var Position$1;

(function (Position) {
  Position["Top"] = "top";
  Position["Bottom"] = "bottom";
  Position["Left"] = "left";
  Position["Right"] = "right";
})(Position$1 || (Position$1 = {}));

var script$a = defineComponent({
  props: {
    type: {
      type: String,
      default: Type.Dark
    },
    position: {
      type: String,
      default: Position$1.Top
    },
    content: String
  },
  setup: function setup(props, _ref) {
    var slots = _ref.slots;
    var targetSlot = ref(null);
    var targetComponent = ref(null);
    var targetElement = ref(null);
    var tooltip = ref(null);
    var visible = ref(false);
    var popper;
    onMounted(function () {
      if (slots !== null && slots !== void 0 && slots.default) {
        targetSlot.value = slots.default()[0];
      }
    });
    onUpdated(function () {
      if (popper) {
        popper.update();
      }
    });

    var show = function show() {
      visible.value = true;
    };

    var hide = function hide() {
      visible.value = false;
    };

    watch(targetComponent, function () {
      var _targetComponent$valu;

      if ((_targetComponent$valu = targetComponent.value) !== null && _targetComponent$valu !== void 0 && _targetComponent$valu.$el) {
        console.log(targetComponent.value);
        targetElement.value = targetComponent.value.$el;
      }
    });
    watch([targetElement, tooltip], function () {
      if (targetElement.value && tooltip.value) {
        popper = createPopper(targetElement.value, tooltip.value, {
          placement: props.position,
          modifiers: [{
            name: "offset",
            options: {
              offset: [0, 15]
            }
          }]
        });
      }
    });
    watch(function () {
      return props.position;
    }, function () {
      if (popper) {
        popper.setOptions({
          placement: props.position
        });
      }
    });
    var styling = computed(function () {
      var _ref2;

      var element = "".concat(Config.ABBR, "-tooltip");
      return _ref2 = {}, _defineProperty(_ref2, element, true), _defineProperty(_ref2, element + "--".concat(props.type), true), _defineProperty(_ref2, element + "--visible", visible.value), _ref2;
    });
    var tooltipStyling = computed(function () {
      var _ref3;

      var element = "".concat(Config.ABBR, "-tooltip__tooltip");
      return _ref3 = {}, _defineProperty(_ref3, element, true), _defineProperty(_ref3, element + "--".concat(props.type), true), _ref3;
    });
    var arrowStyling = computed(function () {
      var element = "".concat(Config.ABBR, "-tooltip__tooltip__arrow");
      return _defineProperty({}, element, true);
    });
    return {
      targetSlot: targetSlot,
      targetComponent: targetComponent,
      show: show,
      hide: hide,
      styling: styling,
      tooltip: tooltip,
      tooltipStyling: tooltipStyling,
      arrowStyling: arrowStyling
    };
  }
});

var _hoisted_1$1 = {
  ref: "tooltip"
};
function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    class: _ctx.styling
  }, [ createCommentVNode("", true), (openBlock(), createBlock(resolveDynamicComponent(_ctx.targetSlot), {
    ref: "targetComponent",
    onMouseenter: _ctx.show,
    onMouseleave: _ctx.hide
  }, null, 8, ["onMouseenter", "onMouseleave"])), createVNode("div", _hoisted_1$1, [createVNode("div", {
    class: _ctx.tooltipStyling
  }, [renderSlot(_ctx.$slots, "content", {}, function () {
    return [createVNode("p", null, toDisplayString(_ctx.content), 1)];
  }), createVNode("div", {
    "data-popper-arrow": "",
    class: _ctx.arrowStyling
  }, null, 2)], 2)], 512)], 2);
}

script$a.render = render$a;

export { script$1 as Alert, script$2 as Avatar, script$3 as AvatarGroup, script$4 as Badge, script$5 as Button, script$6 as Container, script$7 as Grid, script$8 as GridCol, script$9 as GridRow, script as Icon, script$a as Tooltip, icons };
