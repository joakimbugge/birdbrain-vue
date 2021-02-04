import { PropType } from "vue";
declare type SizeProp = string | number | Size | undefined;
interface Size {
    size: string | number;
    order: string | number;
}
declare const _default: import("vue").DefineComponent<{
    size: (StringConstructor | NumberConstructor)[];
    xs: PropType<SizeProp>;
    sm: PropType<SizeProp>;
    md: PropType<SizeProp>;
    lg: PropType<SizeProp>;
    xl: PropType<SizeProp>;
    order: (StringConstructor | NumberConstructor)[];
}, {
    styling: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    size?: string | number | undefined;
    xs?: SizeProp;
    sm?: SizeProp;
    md?: SizeProp;
    lg?: SizeProp;
    xl?: SizeProp;
    order?: string | number | undefined;
}>, {}>;
export default _default;
