import Link from "next/link";
import { volumes } from "../lib/data";


// <Link href="/volumes/the-fellowship-of-the-ring">- The Fellowship of the Ring</Link>

export default function Volumes() {
  return (
    <ul>
      {volumes.map(({ slug, title }) => (
        <li key={slug}>
          <Link href={`/volumes/${slug}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
