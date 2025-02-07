import { type JSX, createSignal, onMount, splitProps } from 'solid-js';
import { thumbHashToDataURL } from 'thumbhash';

interface LazyImgProps extends Omit<JSX.ImgHTMLAttributes<unknown>, 'ref'> {
	src: string;
	thumbhash: string;
}

//* Based on unlazy
export function LazyImg(props: LazyImgProps) {
	const [local, rest] = splitProps(props, ['thumbhash', 'src']);

	const dataUrl = thumbHashToDataURL(base64ToUint8Array(local.thumbhash));
	const [url, setUrl] = createSignal(dataUrl);

	let placeholderImg: HTMLImageElement | undefined;
	onMount(() => {
		console.log(placeholderImg?.width, placeholderImg?.height);
		const realImage = new globalThis.Image();
		realImage.onload = () => {
			setUrl(local.src);
		};
		realImage.src = local.src;
	});
	return <img src={url()} ref={(el) => (placeholderImg = el)} loading="lazy" {...rest} />;
}

function base64ToUint8Array(base64String: string) {
	return Uint8Array.from(globalThis.atob(base64UrlToBase64(base64String)), (x) => x.charCodeAt(0));
}

function base64UrlToBase64(base64Url: string) {
	return base64Url.replaceAll('-', '+').replaceAll('_', '/');
}
