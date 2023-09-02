import React from 'react';
import Link from 'next/link';

import { urlFor } from '@/lib/client';

const FooterBanner = ({ footerBanner: {
    discount, largeText2, salesTime, smallText, buttonText, midText, desc, product, largeText, image,
} }) => {
    return (
        <div className='footer-banner-container'>
            <div className="banner-desc">
                <div className="left">
                    <p>{discount}</p>
                    {/* <h3>{midText}</h3> */}
                    <h3>{largeText}</h3>
                    <h3>{largeText2}</h3>
                    <p>{salesTime}</p>

                </div>
                <div className="right">
                    <p>{smallText}</p>
                    <h3>{midText}</h3>
                    <p>{desc}</p>
                    {/* <Link href={`/product/${product}`}>
                        <button type='button'>{buttonText}</button>
                    </Link> */}

                </div>
                <img className='footer-banner-image' src={urlFor(image)} />
            </div>

        </div>
    )
}

export default FooterBanner

