import Image from "next/image";
import Link from "next/link";
import SvgIcon from "~/components/Common/SvgIcon";

export default function Header() {
  return (
    <div className="w-full h-full flex items-center justify-between px-8">
      <div>
        <Image
          width={100}
          height={0}
          src="/logo.png"
          alt="Logo"
          className="scale-150"
        />
      </div>
      <div>
        <Link href="https://github.com/flingyp/json-to-ts" target="__blank">
          <SvgIcon width={32} height={32} icon="Github" />
        </Link>
      </div>
    </div>
  );
}
