import React from 'react';
import style from './customers.module.css';

const Customers = () => {

    const clientesInfo = [{
        name: "Clarityprofits",
        imgEmpresa: "https://media.licdn.com/dms/image/C560BAQHf8EeF437H5w/company-logo_200_200/0/1649003723836/clarityprofits_logo?e=2147483647&v=beta&t=wB5tYlHjbJnkemeZeogPhdsUHZcbObGhYKcZueprRLQ",
        link: "https://clarityprofits.com/"
    },{
        name: "Cracks Inmobiliarios",
        imgEmpresa: "https://media.licdn.com/dms/image/C4D0BAQFgk83k-RZmVw/company-logo_200_200/0/1678496266182?e=2147483647&v=beta&t=i4NbTbNx-fD9LQAo6qcX82dbY5QCQla7Y_yOERsQ-ss",
        link: "https://cracksinmobiliarios.com/"
        
    },{
        name: "EC Creative Media",
        imgEmpresa: "https://media.licdn.com/dms/image/D560BAQEbPZVYFDTZYA/company-logo_200_200/0/1699636306623/ec_creative_media_logo?e=2147483647&v=beta&t=IUVCBWH4L1zfqeFD1SANxy-cUaSUDv69qpP677W9sJk",
        link: "https://ec-creativemedia.com/ "
       
    },{
        name: "e-Propel",
        imgEmpresa: "https://media.licdn.com/dms/image/C4D0BAQEaLfZwL524sA/company-logo_200_200/0/1631310319626?e=2147483647&v=beta&t=ldHGMaMIKTFdM15mqlvsZi9Sgtsqao7HEWQtdy4XVLc",
        link: "https://apply.epropel.ca/application41485339 "
        
    },{
        name: "Bluehackers",
        imgEmpresa: "https://media.licdn.com/dms/image/C4E0BAQFb3SapvH43zA/company-logo_200_200/0/1630643218740/bluehackers_logo?e=2147483647&v=beta&t=1kup6VHIBu_1Wz-HsB90njTVpUtLVEWGvig4xXFEDeI",
        link: "https://bluehackers.com/ "
        
    },{
        name: "BrainyTrade",
        imgEmpresa: "https://yt3.googleusercontent.com/NijtJQcZ6RPhnE6XQdnouwMkJNFi43zzB4gPHW3_DeXdjYIJkco8ZNPLe57XbdadDLojjWLm=s176-c-k-c0x00ffffff-no-rj",
        link: "https://www.instagram.com/crypto.brainy?igsh=MXdkYWN1bmJleGhvNw%3D%3D&utm_source=qr"
    },{
        name: "MaxScholar",
        imgEmpresa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9pfsuBVnoEpk75tolzqKa6jEjQvyvhOf7Ct7EMzJ2ig&s",
        link: "https://maxscholar.com/about"
        
    },{
        name: "ImpactClients",
        imgEmpresa: "https://consumersiteimages.trustpilot.net/business-units/61e81441e8ad518a8d3974b6-198x149-2x.avif",
        link: "https://www.instagram.com/richardyuzee?igsh=dDR4ZWtscDV1ZzJt"
        
    }
    ,{
        name: "Techina",
        imgEmpresa: "https://content.app-sources.com/s/77736900074635365/uploads/Images/Logo_Techina_Launch_color-4011688.png?format=webp",
        link: "https://techinalaunch.com/"
        
    },
    {
        name: "Leaders",
        imgEmpresa: "https://media.licdn.com/dms/image/D4D0BAQHq5_Bh7Seo7w/company-logo_200_200/0/1713304821748/cubel_marketing_agency_logo?e=1725494400&v=beta&t=OwCY5SVQV8Fp8A3sngGgbIMqO8PvH9orj6kH8KLlL28",
        link: "https://l.instagram.com/?u=https%3A%2F%2Fleaderslatam.com%2F%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAaZu1Inx66zKRpCBqzr60lqdUrVb4sb8CHnSfWpQIqVxPbS-9bYu7r4w8kM_aem_AceDI5Is7hr60FaW1wiwwvecVAgB_giKN5nakc-pMqWAn1IF4LIDTcWbsSH-2Sy57MJFjIA6BuNUbhhhMQ7vX8Up&e=AT3w_4QKMn3sW5WEnud7amyPqp69C2DQrGYZBcqFZFG6hvs293ys_b9eQv75EIwh6OOBhUDW8Al3BeV0V494IXHZRqb6r-Wtr5y2YFr0LYQKdEJYvAOl6Uc"
        
    },{
        name: "SaleHires",
        imgEmpresa: "https://assets.softr-files.com/applications/0a1ccb7d-ca1b-4f98-a4fc-0a018eeea216/assets/30b20e10-cfb1-4728-a539-ac339962259f.png",
        link: "https://www.salehires.com/"
        
    }];

    
   

    return (
        <div>
            <h3 className={style.text}>Other customers</h3>
            <div className={style.scrollContainer}>
                {clientesInfo.map((cliente, index) => (
                    <a target="_blank" href={cliente.link}>
                        <img
                        key={index}
                        src={cliente.imgEmpresa}
                        alt={cliente.name}
                    />
                    </a>
                    
                ))}
            </div>
        </div>
    );
};

export default Customers;
