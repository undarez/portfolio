import panthere from '../asset/agence la panthere.png';
import booki from '../asset/booki.png';
import kasa from '../asset/kasa.png';
import body from '../asset/body.png';
import genius from '../asset/codegenius.png';
import panthere2 from '../asset/panthere.svg'
import qrcode from '../asset/qrcode.svg';
import kasa2 from '../asset/kasa.svg';
import booki2 from '../asset/booki.svg';
import body2 from '../asset/body.svg';



export const CardData = [
      {
            id: 0,
            alt: 'maquette de site web la panthere',
            title: 'modifier les erreurs du site',
            desc: "apprendre à gérer l'accessibilité des utilisateurs Handicapé",
            src: panthere,
            url: 'https://la-panthere-beta.vercel.app/',
            img: panthere2
      },

      {
            id: 1,
            alt: 'Calories',
            title: 'transformer une maquette en site web HTML & CSS',
            desc: 'apprendre a gérer le HTML/CSS',
            src: booki,
            url: 'https://booki-projet-2-openclassroom.vercel.app/',
            img: booki2
      },

      {
            id: 2,
            alt: 'kasa',
            title: 'transformer une maquette React en site web',
            desc: 'Apprendre React',
            src: kasa,
            url: 'https://kasa-pi-drab.vercel.app/',
            img: kasa2
      },

      {
            id: 3,
            alt: 'body app qui calcule le IMC et le PMS',
            title: 'Body Analizer',
            desc: 'Premier projet perso de calcule IMC/PMS',
            src: body,
            url: 'https://body-analizer.vercel.app/',
            img: body2
      },

      {
            id: 4,
            alt: 'genius',
            title: 'CodeGenius',
            desc: 'Deuxieme projet un générateur de Qr-Code/Code-Barre',
            src: genius,
            url: 'https://code-genius.vercel.app/',
            img: qrcode
      },
];
