import Image from "next/image";
import Link from "next/link";
import SvgIcon from "~/components/Common/SvgIcon";

interface HeaderProps {
  clearJsoncCode: () => void;
  copyTsCode: () => void;
}

export default function Header(props: HeaderProps) {
  const clearJsoncCode = () => {
    props.clearJsoncCode();
  };

  const copyTsCode = () => {
    props.copyTsCode();
  };

  return (
    <div className="w-full h-full flex items-center justify-between px-8">
      <div>
        <Image
          width={100}
          height={0}
          src="/logo.png"
          alt="Logo"
          quality={100}
          className="scale-150"
        />
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button
            className="bg-blue-600 rounded px-4 py-1 text-white text-sm hover:bg-blue-700"
            onClick={() => copyTsCode()}
          >
            复制 TypeScript
          </button>

          <button
            className="bg-blue-600 rounded px-4 py-1 text-white text-sm hover:bg-blue-700"
            onClick={() => clearJsoncCode()}
          >
            清空 JSON
          </button>
        </div>

        <Link href="https://github.com/flingyp/json-to-ts" target="__blank">
          <SvgIcon width={20} height={20} icon="Github" />
        </Link>
      </div>
    </div>
  );
}
