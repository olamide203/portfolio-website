import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../../stitches.config';
export default class Document extends NextDocument {
	render() {
		return (
			<Html>
				<Head>
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
