import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../../stitches.config';
export default class Document extends NextDocument {
	render() {
		return (
			<Html>
				<Head>
					{/* <!-- Open Graph / Facebook --> */}
					<meta property='og:type' content='website' data-rh='true' />
					<meta property='og:url' content='https://olamide.netify.live/' data-rh='true' />
					<meta property='og:title' content='Olamide Atitebi' data-rh='true' />
					<meta
						property='og:description'
						content='A full-stack software developer, passionate about open-source'
						data-rh='true'
					/>
					<meta
						property='og:image'
						content='https://olamide.netify.live/images/meta.png'
						data-rh='true'
					/>

					{/* <!-- Twitter --> */}
					<meta property='twitter:card' content='summary_large_image' data-rh='true' />
					<meta property='twitter:url' content='https://olamide.netify.live' data-rh='true' />
					<meta property='twitter:title' content='Olamide Atitebi' data-rh='true' />
					<meta
						property='twitter:description'
						content='A full-stack software developer passionate about open-source'
						data-rh='true'
					/>
					<meta
						property='twitter:image:src'
						content='https://olamide.netify.live/images/meta.png'
						data-rh='true'
					/>
					<style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }} />
				</Head>
				<body className='overflow-x-hidden bg-neutral-900'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
