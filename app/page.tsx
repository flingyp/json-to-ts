"use client";

import { useState } from "react";
import Header from "~/components/Common/Header";
import MonacoEditor from "~/components/MonacoEditor";

export default function Home() {
  const [jsonCode, setJsonCode] = useState(
    `{
  "name": "json-to-ts"
}`
  );
  const changeJsonCode = (code: string) => {
    setJsonCode(code);
  };

  const [tsCode, setTsCode] = useState("");

  const [readOnlyMessage, setReadOnlyMessage] = useState(
    "请编辑左侧 JSON 代码，将自动转换为TypeScript类型"
  );

  return (
    <>
      <header className="w-full h-16 border-b shadow-sm">
        <Header />
      </header>
      <main className="w-screen h-[calc(100vh-64px)] flex items-center mt-1">
        <MonacoEditor
          width="50%"
          height="100%"
          value={jsonCode}
          language="json"
          onChange={(value) => changeJsonCode(value!)}
        />
        <MonacoEditor
          width="50%"
          height="100%"
          value={tsCode}
          language="ts"
          options={{
            readOnly: true,
            readOnlyMessage: {
              value: readOnlyMessage,
              isTrusted: true,
              supportThemeIcons: true,
            },
          }}
        />
      </main>
    </>
  );
}
