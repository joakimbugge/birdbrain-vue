import { IconName as FaIconName, IconDefinition as FaIconDefinition } from "@fortawesome/fontawesome-svg-core";
import { PropType } from "vue";
export declare type IconDefinition = FaIconDefinition;
export declare type IconName = FaIconName;
export declare const icons: IconDefinition[];
declare const _default: import("vue").DefineComponent<{
    name: {
        type: PropType<FaIconName>;
        required: true;
        validator: (value: IconName) => boolean;
    };
    spin: BooleanConstructor;
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    name: FaIconName;
    spin: boolean;
} & {}>, {
    spin: boolean;
}>;
export default _default;
