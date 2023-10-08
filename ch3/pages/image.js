import Image from "next/image";

function ImagePage() {
    return (
        <div>
            <Image
                src="https://images.unsplash.com/photo-1682687982360-3fbab65f9d50"
                alt="unsplash image"
                layout="responsive"
                width={500}
                height={500}
            />
        </div>
    )
}

export default ImagePage;

