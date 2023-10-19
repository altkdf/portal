import React from "react";
import Head from "@docusaurus/Head";
import { useIsDocs } from "@site/src/hooks/useIsDocs";

export function AskAIWidget() {
  const { isDocsPage, currentPath, docsHome } = useIsDocs();
  console.log(currentPath);

  return (
    isDocsPage && (
      // AI chatbot integration via Kapa
      <>
        <Head>
          <script
            defer
            src="https://widget.kapa.ai/kapa-widget.bundle.js"
            data-website-id="08910249-851f-465b-b60f-238d84e1afc1"
            data-project-name="Internet Computer"
            data-project-color="#172234"
            data-project-logo="https://s3.coinmarketcap.com/static-gravity/image/2fb1bc84c1494178beef0822179d137d.png"
            data-button-hide="true"
            data-modal-override-open-class="ask-ai-widget-trigger"
          />
        </Head>
        <div
          className={"w-36 h-12 fixed bottom-0 z-50 my-8 mx-4"}
          style={{
            left: currentPath === docsHome ? "50vw" : "unset",
            right: currentPath === docsHome ? "50vw" : "0",
            bottom: currentPath === docsHome ? "0" : "48px",
          }}
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#EA2B7B] to-[#2A3B8E] opacity-75 blur-2xl"></div>
            <button className="ask-ai-widget-trigger relative flex w-36 h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#EA2B7B] to-[#2A3B8E] text-white border-0 font-bold">
              Ask AI
            </button>
          </div>
        </div>
      </>
    )
  );
}
