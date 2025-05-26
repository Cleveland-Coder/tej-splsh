import Script from 'next/script';

export default function BeholdWidget() {
  return (
    <>
      <div
        // @ts-ignore - Custom element not recognized by TypeScript
        className="mt-6"
        feed-id="nrEWtNFUgeiPALmBAtLZ"
        is="behold-widget"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            (() => {
              const d=document,s=d.createElement("script");s.type="module";
              s.src="https://w.behold.so/widget.js";d.head.append(s);
            })();
          `,
        }}
        id="behold-widget-script"
      />
    </>
  );
}
