import { useRef, useEffect } from "react";
import { useData } from "../contexts/DataProvider";

function Footer() {
  const footerRef = useRef(null);
  const { setFooterHeight } = useData();

  useEffect(() => {
    if (footerRef.current) {
      const height = footerRef.current.offsetHeight;
      setFooterHeight(height);
    }
  });
  return (
    <footer ref={footerRef} className="p-4 border-t-neutral-300 border-t">
      <div className="mx-auto container">
        <div>
          <p className="text-3xl font-bold">Blog Footer</p>
        </div>
        <div></div>
      </div>
    </footer>
  );
}

export default Footer;
