import Image from "next/image";

interface LogoProps extends React.ComponentPropsWithoutRef<typeof Image> {
  className?: string;
}

const createLogoComponent = (id: string) => {
  const LogoComponent = ({ className }: LogoProps) => (
    <Image
      src={`https://cms.mistral.ai/assets/${id}`}
      alt="logo"
      width={100}
      height={44}
      className={`h-[44px] w-auto object-contain py-1.5 ${className || ""}`}
    />
  );

  return LogoComponent;
};

export const AxA = createLogoComponent("b42ef223-a3d8-42d7-b7a9-4fee0023fdd2");
export const Belfius = createLogoComponent(
  "732193c8-59ab-492f-af70-dd153f157b2c"
);
export const Bnp = createLogoComponent("854710df-7625-4d63-8c5a-d8ab81e54c1b");
export const Brave = createLogoComponent(
  "1995e6bc-e1da-4692-aec3-ebee412b390a"
);
export const CloudFlare = createLogoComponent(
  "fedcf302-5831-4f23-ba18-325f778d2b03"
);
export const CMA = createLogoComponent("b6837a3d-5fb3-42e5-909b-d43bbc7f0b53");
export const FranceTravail = createLogoComponent(
  "48754a01-0513-412e-8ef6-c40adf123f3a"
);
export const Logo8 = createLogoComponent(
  "97404647-bc81-48f2-8c9e-6c4ef4d8d19b"
);
export const Harvey = createLogoComponent(
  "c3acbcae-5504-4b2e-89a3-d3a841a6aa8f"
);
export const IBM = createLogoComponent("6aec4419-ebfd-4f19-8432-17fec33e0929");
export const Logo11 = createLogoComponent(
  "6f8cbade-2d4f-4f26-a7a2-6f6c4715d7b2"
);
export const Logo12 = createLogoComponent(
  "f6685251-d0f4-456c-8090-7c07bffe7a6b"
);
export const Logo13 = createLogoComponent(
  "753f7c3c-b2f6-47ed-b7b8-54126ee19e3e"
);
export const Logo14 = createLogoComponent(
  "06a82fa5-050c-46a7-98aa-3a4d2170ab75"
);
export const Logo15 = createLogoComponent(
  "1036eaa4-e828-4930-8927-7c333f762507"
);
export const Logo16 = createLogoComponent(
  "cd0def9e-9249-4e70-b27a-5f8681e1da96"
);
export const Logo17 = createLogoComponent(
  "83efcb0f-f48b-4b45-9e54-d01baec603b9"
);

export const allLogos = [
  AxA,
  Belfius,
  Bnp,
  Brave,
  CloudFlare,
  CMA,
  FranceTravail,
  Logo8,
  Harvey,
  IBM,
  Logo11,
  Logo12,
  Logo13,
  Logo14,
  Logo15,
  Logo16,
  Logo17,
];
