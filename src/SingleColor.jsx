import React, { useState, useEffect } from 'react';

const SingleColor = ({ rgb, weight, index, hex }) => {
	const [alert, setAlert] = useState(false);

	const bcg = rgb.join(',');

	const hexValue = `#${hex}`;

	useEffect(() => {
		const timer = setTimeout(() => setAlert(false), 2000);
		return () => clearTimeout(timer);
	}, [alert]);

	const copyToClipboard = () => {
		setAlert(true);
		navigator.clipboard.writeText(hexValue);
	};

	return (
		<article
			onClick={copyToClipboard}
			className={`color ${index > 10 ? 'color-light' : null}`}
			style={{ backgroundColor: `rgb(${bcg})` }}
		>
			<p className="percent-value">{weight}%</p>
			<p className="color-value">{hexValue}</p>
			{alert && <p className="alert">copied to clipboard</p>}
		</article>
	);
};

export default SingleColor;
