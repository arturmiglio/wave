// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const WalletIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <path
                d="M19 12.51l-.008-.125A1 1 0 0018 11.51H5v9h12v2H3v-13h1.721l6.925-6.924a2 2 0 012.829 0l4.95 4.95c.65.65.76 1.74.325 2.537A2.996 2.996 0 0121 12.51v10h-2v-10zm-3.5 2.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM13.06 4L7.549 9.51h5.063l2.97-2.991L13.06 4zm3.791 3.79l-1.739 1.72h2.338l.56-.56-1.159-1.16z"
                fill="#001E3E"
                fillRule="nonzero"
            />
        </svg>
    );
};

WalletIcon.defaultProps = {};
export default WalletIcon;
