import { defineComponent, resolveComponent, openBlock, createBlock, computed, createCommentVNode, renderSlot, ref, onMounted, Fragment, renderList, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString, toRefs, watch } from 'vue';
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

      var element = "enk-alert";
      var typeModifier = "--".concat(props.type);
      return _ref = {}, _defineProperty(_ref, element + typeModifier, true), _defineProperty(_ref, element + "--inline", props.inline), _defineProperty(_ref, element + typeModifier + "--outline", props.outline), _defineProperty(_ref, element + typeModifier + "--text", props.text), _ref;
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
      styling: styling
    };
  }
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Icon = resolveComponent("Icon");

  return openBlock(), createBlock("div", {
    class: ["enk-alert", _ctx.styling]
  }, [_ctx.icon !== false ? (openBlock(), createBlock(_component_Icon, {
    key: 0,
    name: _ctx.iconName,
    class: "enk-alert__icon"
  }, null, 8, ["name"])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default")], 2);
}

script$1.render = render$1;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Config = function Config() {
  _classCallCheck(this, Config);
};
Config.VERSION = 0.1;
Config.NAME = "enkelt";
Config.ABBR = "enk";

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

      var prefix = "".concat(Config.ABBR, "-avatar");
      var type = "".concat(prefix, "--").concat(props.type);
      return _ref3 = {}, _defineProperty(_ref3, type, true), _defineProperty(_ref3, prefix + "--image", isImage.value), _ref3;
    });
    return {
      styling: styling
    };
  }
});

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    class: ["enk-avatar", _ctx.styling]
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

      var prefix = "".concat(Config.ABBR, "-avatar-group");
      return _ref2 = {}, _defineProperty(_ref2, prefix, true), _defineProperty(_ref2, prefix + "--grouped", isGrouped.value), _defineProperty(_ref2, prefix + "--narrow", props.narrow), _ref2;
    });
    return {
      avatars: avatars,
      slicedAvatars: slicedAvatars,
      styling: styling
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
    class: "enk-avatar-group__rest"
  }, {
    default: withCtx(function () {
      return [createTextVNode("+" + toDisplayString(_ctx.avatars.length - _ctx.max), 1)];
    }),
    _: 1
  })) : createCommentVNode("", true)], 2);
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

      var prefix = "".concat(Config.ABBR, "-badge");
      var type = "".concat(prefix, "--").concat(props.type);
      var position = "".concat(prefix, "--").concat(props.position);
      return _ref = {}, _defineProperty(_ref, type, true), _defineProperty(_ref, position, true), _defineProperty(_ref, type + "--pulse", props.pulse), _defineProperty(_ref, prefix + "--dot", props.dot), _defineProperty(_ref, prefix + "--pulse", props.pulse), _ref;
    });
    return {
      isVisible: isVisible,
      parsedValue: parsedValue,
      styling: styling
    };
  }
});

var _hoisted_1 = {
  key: 0,
  class: "enk-badge__indicator"
};
var _hoisted_2 = {
  key: 0
};
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    class: ["enk-badge", _ctx.styling]
  }, [renderSlot(_ctx.$slots, "default"), _ctx.isVisible ? (openBlock(), createBlock("div", _hoisted_1, [!_ctx.dot ? (openBlock(), createBlock("span", _hoisted_2, toDisplayString(_ctx.parsedValue), 1)) : createCommentVNode("", true)])) : createCommentVNode("", true)], 2);
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

      return _ref = {}, _defineProperty(_ref, "enk-container", true), _defineProperty(_ref, "enk-container--fluid", props.fluid), _defineProperty(_ref, "enk-container--center", props.center), _ref;
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

var script$7 = defineComponent({});

var _hoisted_1$1 = {
  class: "enk-grid"
};
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1$1, [renderSlot(_ctx.$slots, "default")]);
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

      var breakpoints = (_breakpoints = {}, _defineProperty(_breakpoints, Breakpoint.Xs, props.xs), _defineProperty(_breakpoints, Breakpoint.Sm, props.sm), _defineProperty(_breakpoints, Breakpoint.Md, props.md), _defineProperty(_breakpoints, Breakpoint.Lg, props.lg), _defineProperty(_breakpoints, Breakpoint.Xl, props.xl), _breakpoints);
      return _objectSpread2((_objectSpread4 = {}, _defineProperty(_objectSpread4, "".concat(Config.ABBR, "-grid-col--") + props.size, Boolean(props.size)), _defineProperty(_objectSpread4, "".concat(Config.ABBR, "-grid-col--order--") + props.order, Boolean(props.order)), _objectSpread4), getStylingForBreakpoints(breakpoints));
    });
    return {
      styling: styling
    };
  }
});

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", {
    class: ["enk-grid-col", _ctx.styling]
  }, [renderSlot(_ctx.$slots, "default")], 2);
}

script$8.render = render$8;

var script$9 = defineComponent({});

var _hoisted_1$2 = {
  class: "enk-grid-row"
};
function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("div", _hoisted_1$2, [renderSlot(_ctx.$slots, "default")]);
}

script$9.render = render$9;

export { script$1 as Alert, script$2 as Avatar, script$3 as AvatarGroup, script$4 as Badge, script$5 as Button, script$6 as Container, script$7 as Grid, script$8 as GridCol, script$9 as GridRow, script as Icon, icons };
