import BaseControl, { IBaseControlProps } from "./BaseControl";

interface IShareControlProps extends IBaseControlProps {
    url: string;
}

export default class ShareControl extends BaseControl<IShareControlProps> {
    
}
