import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";

const mySlug = "the-two-towers";

const content = volumes.find(({slug}) => slug === mySlug);

export default function handler() {
    return <>
        <Link href="/">All Volumes</Link>
        <h1>{ content.title }</h1>
        <p>{ content.description }</p>
        <ul>{content.books.map((b) => <li> {b.ordinal} {b.title} </li> )}</ul>
        <Image 
            src={content.cover}
            height={230}
            width={140}
            alt="A cover picture"
        />;
    </>
}
