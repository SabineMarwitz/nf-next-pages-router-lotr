import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function VolumeDetail() {
    const router = useRouter();
    const { aslug } = router.query;
    const content = volumes.find(({slug}) => slug === aslug);

    return <>
        <Link href="/">All Volumes ...</Link>
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