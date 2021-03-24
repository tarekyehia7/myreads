export type AddIconProps = {
    to: string;
    text: string;
};

export type BackLinkProps = Pick<AddIconProps, 'to' | 'text'>;

export type BookCoverProps = {
    url: string;
};