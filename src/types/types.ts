import { HTMLProps } from "react";

export type DivProps = HTMLProps<HTMLDivElement>;

export type TUser = {
  id: string;
  email: string;
  password: string;
};

export type TProcess = {
  id: string;
  text: string;
  controls: boolean;
  isPrivate: boolean;
  icon: string;
  bgColor: string;
};

export type TContract = {
  id: string;
  contractNumber: string;
  customerNumber: string;
  email: string;
  contractType: "cdd" | "cdi";
  phoneNumber: string;
};

export type TProcessIcon = "board" | "cart" | undefined;

export type ReactSVGComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
}>