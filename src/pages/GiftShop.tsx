import './Pages.css';

const gifts = [
// {
//         "name": "Lifes too short to have that dress in your cart, just buy it (Sorry I know this is not the exact one tried a lot its kinda impossible to search blue dress and see the exact one 😂😂)",
//         "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17887578/2022/4/14/82246a20-2220-49b8-94fa-b590b65d57641649932234981RAASSIOMulticolouredFloralCrepeA-LineDress1.jpg",
//         "link": "https://www.myntra.com/dresses/raassio/raassio-women-blue-floral-crepe-a-line-dress/17887578/buy"
//     },
    {
        "name": "Sorry cant buy you the didi 😁",
        "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/20733030/2022/11/13/d93b1df2-8ced-4230-87a1-eb195807e5161668286988505SOHIWomenGold-TonedGold-PlatedWraparoundBracelet4.jpg",
        "link": "https://www.myntra.com/bracelet/sohi/sohi-women-gold-toned-gold-plated-wraparound-bracelet/20733030/buy"
    },
    {
        "name": "If beauty had a uniform, this skirt would be it aur aap toh waise bhi meri fashion queen ho!😘😘",
        "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/NOVEMBER/6/NfS3fTNn_8055eae17ee24df2893e1a46bc5aa724.jpg",
        "link": "https://www.myntra.com/skirts/sassafras+basics/sassafras-basics-women-denim-front-slit-pencil-midi-skirt/31551056/buy"
    },
    {
        "name": "I am not sure if this is the exact one you liked but close and I liked this",
        "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/DECEMBER/9/tab83xoM_828ca5688ec14238a2511fd7136607ef.jpg",
        "link": "https://www.myntra.com/sweaters/berrylush/berrylush-women-striped-longline-cardigan/31890400/buy"
    },
    {
        "name": "Iss sweatshirt mein lagegi tu jaise candy cane—ekdum meethi aur full tempting! 😁😁",
        "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/DECEMBER/4/57t6gKEl_d5901fdff5874b61a4281404f9e541ad.jpg",
        "link": "https://www.myntra.com/sweaters/clora+creation/clora-creation-women-striped-woollen-pullover/31846742/buy"
    },
    {
        "name": "If confidence had a dress code, it would be you in these jeans.",
        "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/31721925/2025/4/28/e20e7e65-161e-442b-b5b0-8d902f8362ed1745823618008-bebe-Women-Jeans-2801745823617320-2.jpg",
        "link": "https://www.myntra.com/jeans/bebe/bebe-women-denim-daze-beaded-high-rise-wide-leg-jeans-with-high-slits/31721925/buy"
    },
    {
        "name": "Your eyes already hold galaxies—this just outlines the universe.",
        "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/NOVEMBER/11/r8IJuzaC_e781ad870b7a4451aeaa5fb58e065e9f.jpg",
        "link": "https://www.myntra.com/eyeliner/swiss+beauty/swiss-beauty-waterproof-holographic-eyeliner-02-g---milky-way-01/26300320/buy"
    },
    {
        "name": "The real surprise is here.",
        "image": "https://images.meesho.com/images/products/232918855/5v8ep_512.webp",
        "link": "https://drive.google.com/file/d/1vflG2WD-t-e5i3-KZLeACkuEx4-LsjZS/view?usp=sharing"
      },
    {
        "name": "Bag for the new mac you'll get",
        "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/AUGUST/14/Vanow11x_ade6fecdd0b041d8a07d3f807970a0d6.jpg",
        "link": "https://www.myntra.com/bags/allen-solly-woman/allen-solly-woman-up-to-18-inch-textured-laptop-bag/30578869/buy?utm_source=social_share_pdp&utm_medium=deeplink&utm_campaign=social_share_pdp_deeplink"
    },
    {
        "name": "Orange 😳😳",
        "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/9199799/2019/5/15/0be92c63-ec3a-4c02-91fc-9130ea2b9e9c1557925422128-Anouk-Women-Mustard--White-Printed-Straight-Kurta-4101557925-1.jpg",
        "link": "https://www.myntra.com/topwear/anouk/anouk-women-orange-&-white-floral-printed-straight-kurta/9199799/buy?utm_source=social_share_pdp&utm_medium=deeplink&utm_campaign=social_share_pdp_deeplink"
    },
    {
        "name": "Bag for the new mac you'll get",
        "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2024/AUGUST/14/Vanow11x_ade6fecdd0b041d8a07d3f807970a0d6.jpg",
        "link": "https://www.myntra.com/bags/allen-solly-woman/allen-solly-woman-up-to-18-inch-textured-laptop-bag/30578869/buy?utm_source=social_share_pdp&utm_medium=deeplink&utm_campaign=social_share_pdp_deeplink"
    },
    {
        "name": "You found this on flipkart",
        "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/27672376/2024/3/28/3debf168-29a5-4a02-a4a0-a96d1270c7f51711621361679-Libas-Ethnic-Motifs-Embroidered-Thread-Work-Pure-Cotton-Kurt-1.jpg",
        "link": "https://www.myntra.com/kurta-sets/libas/libas-ethnic-motifs-embroidered-thread-work-pure-cotton-kurta-with-palazzos--dupatta/27672376/buy"
    },
    {
        "name": "I kinda Like this color",
        "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/29418628/2024/5/8/8825ad45-3142-4f06-b5d3-2ff170bde6361715182474107KhushalKWomenrayonkurtaandpalazzowithdupattaset5.jpg",
        "link": "https://www.myntra.com/kurta-sets/khushal+k/khushal-k-paisley-printed-v-neck-sleeveless-kurta-with-palazzos--with-dupatta/29418628/buy"
    },
    {
        "name": "Purple 😁😁",
        "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/30967606/2025/3/12/87438149-32ad-450d-a3c0-78208e31ddde1741774224322-GoSriKi-Embroidered-Zari-Anarkali-Kurta--Trousers-With-Dupat-3.jpg",
        "link": "https://www.myntra.com/kurta-sets/gosriki/gosriki-embroidered-zari-anarkali-kurta--trousers-with-dupatta/30967606/buy"
    },
    {
        "name": "Cool Print",
        "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/31141488/2024/12/27/28a8befc-418f-45bf-b62d-fb50af71e24e1735317272051-GoSriKi-Floral-Printed-Straight-Kurta-With-Palazzos-71173531-1.jpg",
        "link": "https://www.myntra.com/kurta-sets/gosriki/gosriki-floral-printed-straight-kurta-with-palazzos/31141488/buy"
    },
    {
        "name": "Red",
        "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/27943376/2024/2/29/0dce6d40-ac36-44cb-9002-6c9433af83f51709192741412WomensFuchsiawovensleevelesskurtawithtrousers5.jpg",
        "link": "https://www.myntra.com/kurta-sets/anouk/anouk-round-neck-kurta-with-trousers/27943376/buy"
    },
    {
        "name": "Simple and elegant",
        "image": "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25487678/2023/11/2/16fc25d1-38d1-42c7-882d-a77a9b9280e31698926102264-Anouk-Women-Kurtas-7921698926101926-1.jpg    ",
        "link": "https://www.myntra.com/kurtas/anouk/anouk-leheriya-printed-halter-neck-thread-work-kurta/25487678/buy"
    }
];

export default function GiftShop() {
  return (
    <div className="page giftshop">
      <h2>🎁 Gift Ideas for You</h2>
      <div className="gift-grid">
        {gifts.map((gift, index) => (
          <a
            key={index}
            href={gift.link}
            target="_blank"
            rel="noopener noreferrer"
            className="gift-item"
          >
            <img src={gift.image} alt={gift.name} className="gift-image" />
            <p className="gift-title">{gift.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
