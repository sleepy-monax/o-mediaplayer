import { BaseControl, IBaseControlProps } from "./BaseControl";

interface IShareControlProps extends IBaseControlProps {
    url: string;
}

export class ShareControl extends BaseControl<IShareControlProps> {
    
}
