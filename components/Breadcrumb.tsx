"use client";
import React from 'react'
import { useTranslations } from 'next-intl';

type Props = {
    nameKey: string
    url: string
}

const Breadcrumb = ({nameKey, url}: Props) => {
  const t = useTranslations("Breadcrumb");
  const name = t(nameKey);
  return (
    <div>
        <div className="rts-bread-crumb-area bg-breadcrumb">
        <div className="container ptb--65">
            <div className="row">
                <div className="col-lg-12">
                    <div className="con-tent-main">
                        <div className="wrapper">
                            <span className="bg-text-stok">{name}</span>
                            <div className="title skew-up">
                                <a href={url}>{name}</a>
                            </div>
                            <div className="slug skew-up">
                                <a href="/">{t('home')} /</a>
                                <a className="active" href="/">{name}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Breadcrumb