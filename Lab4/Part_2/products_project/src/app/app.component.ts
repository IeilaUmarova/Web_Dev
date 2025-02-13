
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  products = [
    {
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAqrG9BhAVEiwAaPu5zn8qOW5QwEvnSMrlhqs5PJ2J_zDApla-t_Kom5QKjih0MMZN16cPXRoC2IoQAvD_BwE',
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета.',
      rating: 5.0,
    },
    {
      name: 'Микроволновая печь Leadbros D20MXP04-C70-5161B черный',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h99/h64/82552737169438.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/leadbros-d20mxp04-c70-5161b-chernyi-112252983/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAqrG9BhAVEiwAaPu5zn8qOW5QwEvnSMrlhqs5PJ2J_zDApla-t_Kom5QKjih0MMZN16cPXRoC2IoQAvD_BwE',
      description: 'Стильная и компактная модель в черном корпусе, оснащенная удобным механическим управлением.',
      rating: 4.8,
    },
    {
      name: 'Манеж-кровать, продольный маятниковый механизм (0-3)',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha7/h73/85720169054238.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/manezh-krovat-prodol-nyi-majatnikovyi-mehanizm-ot-0-do-3-h-let-118331778/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAzba9BhBhEiwA7glbap_60b2bF0Mzp-mCfdalfMYF147Wx7uJ0RwXeUwXRDoPW64b7y-O9xoCVSkQAvD_BwE',
      description: 'Манеж-кровать с продольным маятниковым механизмом предназначен для детей от 0 до 3 лет.',
      rating: 4.7,
    },
    {
      name: 'Наушники Apple AirPods 3 with Lightning Charging Case белый',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAqrG9BhAVEiwAaPu5zn8qOW5QwEvnSMrlhqs5PJ2J_zDApla-t_Kom5QKjih0MMZN16cPXRoC2IoQAvD_BwE',
      description: 'Динамический драйвер, разработанный Apple, использует специальный усилитель.',
      rating: 4.6,
    },
    {
      name: 'Умная колонка Яндекс Станция Миди черный',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hbd/h09/84530104467486.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-midi-chernyi-114709674/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAqrG9BhAVEiwAaPu5zn8qOW5QwEvnSMrlhqs5PJ2J_zDApla-t_Kom5QKjih0MMZN16cPXRoC2IoQAvD_BwE',
      description: 'Яндекс Станция Миди — новая умная колонка с виртуальным ассистентом Алисой.',
      rating: 4.5,
    },
    {
      name: 'Электрочайник Yingzheng ZY-305 черный',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h9b/82803977289758.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/elektrochainik-yingzheng-zy-305-chernyi-112526442/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAqrG9BhAVEiwAaPu5zn8qOW5QwEvnSMrlhqs5PJ2J_zDApla-t_Kom5QKjih0MMZN16cPXRoC2IoQAvD_BwE',
      description: 'Современный и стильный, этот электрический чайник сочетает в себе элегантный дизайн.',
      rating: 4.7,
    },
    {
      name: 'Пылесос Deerma DX115C черный',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h93/hcf/63791470936094.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/deerma-dx115c-chernyi-3701430/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAqrG9BhAVEiwAaPu5zn8qOW5QwEvnSMrlhqs5PJ2J_zDApla-t_Kom5QKjih0MMZN16cPXRoC2IoQAvD_BwE',
      description: 'Съемный пылесборник модели при объеме 1.2 л нет необходимости очищать слишком часто. В нем предусмотрен циклонный фильтр.',
      rating: 4.6,
    },
    {
      name: 'Morbido диван прямой Комфорт, 80х210х80 см',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/p0e/1618343.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/morbido-divan-prjamoi-komfort-obivka-mikroveljur-80h210h80-sm-bezhevyi-109383093/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAqrG9BhAVEiwAaPu5zn8qOW5QwEvnSMrlhqs5PJ2J_zDApla-t_Kom5QKjih0MMZN16cPXRoC2IoQAvD_BwE',
      description: 'Практичный  диван-кровать с легкой системой трансформации. Каркас изготовлен из ДСП, деревянный брус.',
      rating: 4.8,
    },
    {
      name: 'Wi-Fi роутер TP-LINK TD-W8961N',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h18/63760532275230.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/wi-fi-router-tp-link-td-w8961n-7600132/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAqrG9BhAVEiwAaPu5zn8qOW5QwEvnSMrlhqs5PJ2J_zDApla-t_Kom5QKjih0MMZN16cPXRoC2IoQAvD_BwE',
      description: 'Беспроводной маршрутизатор серии N со встроенным модемом ADSL2+ и скоростью передачи данных до 300 Мбит/с.',
      rating: 4.7,
    },
    {
      name: 'Ноутбук Apple MacBook Air 13 2022 13.6" / 8 Гб / SSD 256 Гб',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAqrG9BhAVEiwAaPu5zn8qOW5QwEvnSMrlhqs5PJ2J_zDApla-t_Kom5QKjih0MMZN16cPXRoC2IoQAvD_BwE',
      description: 'MacBook Air 2022 года можно назвать одним из крупнейших обновлений линейки за всю историю, мощный процессор M2, улучшенную веб-камеру.',
      rating: 4.8,
    },
    {
      name: 'Комплект посуды DS0003 , силикон, голубой',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pee/pfa/19567257.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/komplekt-posudy-ds0003-silikon-goluboi-106526923/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAzba9BhBhEiwA7glbaoZcclVni-qXIOE19gj1L91knUPlKYlB11NjoYN5CKJ8YosarCHWzRoCgYUQAvD_BwE',
      description: 'набор из силиконовой посуды голубого цвета, идеально подходящий для безопасного использования в микроволновке и легкого ухода.',
      rating: 4.7,
    },
    {
      name: 'Телевизор Yasin 43G11 109 см черный',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/p74/19867464.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/yasin-43g11-109-sm-chernyi-108494502/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAzba9BhBhEiwA7glbaoZcclVni-qXIOE19gj1L91knUPlKYlB11NjoYN5CKJ8YosarCHWzRoCgYUQAvD_BwE',
      description: 'Телевизор YASIN 43G11K 2K FHD может отображать чрезвычайно четкое и детальное изображение.',
      rating: 4.8,
    }
  ];

  share(product: any, platform: 'whatsapp' | 'telegram') {
    const encodedUrl = encodeURIComponent(product.link);
    let shareUrl = '';

    if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${encodedUrl}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${encodedUrl}`;
    }

    window.open(shareUrl, '_blank');
  }
}
