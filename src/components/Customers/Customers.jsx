import React from 'react';
import style from './customers.module.css';

const Customers = () => {

    const clientesInfo = [{
        name: "Clarityprofits",
        imgEmpresa: "https://media.licdn.com/dms/image/C560BAQHf8EeF437H5w/company-logo_200_200/0/1649003723836/clarityprofits_logo?e=2147483647&v=beta&t=wB5tYlHjbJnkemeZeogPhdsUHZcbObGhYKcZueprRLQ",
    },{
        name: "Cracks Inmobiliarios",
        imgEmpresa: "https://media.licdn.com/dms/image/C4D0BAQFgk83k-RZmVw/company-logo_200_200/0/1678496266182?e=2147483647&v=beta&t=i4NbTbNx-fD9LQAo6qcX82dbY5QCQla7Y_yOERsQ-ss",
        
    },{
        name: " EC Creative Media",
        imgEmpresa: "https://media.licdn.com/dms/image/D560BAQEbPZVYFDTZYA/company-logo_200_200/0/1699636306623/ec_creative_media_logo?e=2147483647&v=beta&t=IUVCBWH4L1zfqeFD1SANxy-cUaSUDv69qpP677W9sJk",
       
    },{
        name: "e-Propel",
        imgEmpresa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTvZv5N2EbEyhHcNDX5nCqveiPYk18TiCGDBBcRwaBjA&s",
        
    },{
        name: "Bluehackers",
        imgEmpresa: "https://media.licdn.com/dms/image/C4E0BAQFb3SapvH43zA/company-logo_200_200/0/1630643218740/bluehackers_logo?e=2147483647&v=beta&t=1kup6VHIBu_1Wz-HsB90njTVpUtLVEWGvig4xXFEDeI",
        
    },{
        name: " BrainyTrade",
        imgEmpresa: "https://i.ebayimg.com/images/g/4dUAAOSwtOBgrMjO/s-l300.jpg",
    },{
        name: "MaxScholar",
        imgEmpresa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9pfsuBVnoEpk75tolzqKa6jEjQvyvhOf7Ct7EMzJ2ig&s",
        
    },{
        name: "ImpactClients",
        imgEmpresa: "https://images-platform.99static.com/3fAkdv3H6_VNhiDpqwmi2o37--k=/500x500/top/smart/99designs-contests-attachments/11/11121/attachment_11121714",
        
    },{
        name: "SaleHires",
        imgEmpresa: "https://assets.softr-files.com/applications/0a1ccb7d-ca1b-4f98-a4fc-0a018eeea216/assets/30b20e10-cfb1-4728-a539-ac339962259f.png",
        
    }];

   

    return (
        <div>
            <h3>Otras empresas con las que trabajamos</h3>
            <div className={style.scrollContainer}>
                {clientesInfo.map((cliente, index) => (
                    <img
                        key={index}
                        src={cliente.imgEmpresa}
                        alt={cliente.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default Customers;
