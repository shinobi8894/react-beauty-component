interface PropsType {
  icon: keyof typeof icons;
  [key: string]: any;
}

const icons: any = {
  "arrow-left": (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
    >
      <path
        d="M15.5 19l-7-7 7-7"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      ></path>
    </svg>
  ),
};

const Icon = ({ icon, ...rest }: PropsType) => {
  return <div {...rest}>{icons[icon]}</div>;
};

export default Icon;
