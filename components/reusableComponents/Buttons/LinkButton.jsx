import Link from "next/link";

import defaultStyles from "./LinkButton.module.css";

export default function LinkButton({ link, text, parentStyles }) {

  return (
    <Link
      className={`
      ${defaultStyles.linkButton}
      ${parentStyles?.linkButton}
    `}
      href={link}
    >
      <p>
        {text}
      </p>

    </Link >
  );
}