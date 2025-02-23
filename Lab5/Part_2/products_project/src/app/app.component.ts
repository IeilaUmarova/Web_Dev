
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  image: string;
  link: string;
  description: string;
  rating: number;
  likes: number;
}

interface Category {
  name: string;
  products: Product[];
}

@Component({
  selector: 'app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  categories: Category[] = [
    {
      name: 'gadgets',
      products: [
        { 
          id: 1, 
          name: 'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAqrG9BhAVEiwAaPu5zn8qOW5QwEvnSMrlhqs5PJ2J_zDApla-t_Kom5QKjih0MMZN16cPXRoC2IoQAvD_BwE',
          description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета.',
          rating: 5.0,
          likes: 0
        },
        {
          id: 2,
          name: 'Наушники Apple AirPods 3 with Lightning Charging Case белый',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAqrG9BhAVEiwAaPu5zn8qOW5QwEvnSMrlhqs5PJ2J_zDApla-t_Kom5QKjih0MMZN16cPXRoC2IoQAvD_BwE',
          description: 'Динамический драйвер, разработанный Apple, использует специальный усилитель.',
          rating: 4.6,
          likes: 0
        },
        {
          id: 3,
          name: 'Ноутбук Apple MacBook Air 13 2022 13.6" / 8 Гб / SSD 256 Гб',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAqrG9BhAVEiwAaPu5zn8qOW5QwEvnSMrlhqs5PJ2J_zDApla-t_Kom5QKjih0MMZN16cPXRoC2IoQAvD_BwE',
          description: 'MacBook Air 2022 года можно назвать одним из крупнейших обновлений линейки за всю историю, мощный процессор M2, улучшенную веб-камеру.',
          rating: 4.8,
          likes: 0
        }
      ]
    },
    {
      name: 'technology',
      products: [
        {
          id: 1,
          name: 'Wi-Fi роутер TP-LINK TD-W8961N',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h18/63760532275230.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/wi-fi-router-tp-link-td-w8961n-7600132/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAqrG9BhAVEiwAaPu5zn8qOW5QwEvnSMrlhqs5PJ2J_zDApla-t_Kom5QKjih0MMZN16cPXRoC2IoQAvD_BwE',
          description: 'Беспроводной маршрутизатор серии N со встроенным модемом ADSL2+ и скоростью передачи данных до 300 Мбит/с.',
          rating: 4.7,
          likes: 0
        },
        {
          id: 2,
          name: 'Телевизор Yasin 43G11 109 см черный',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/p74/19867464.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/yasin-43g11-109-sm-chernyi-108494502/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAzba9BhBhEiwA7glbaoZcclVni-qXIOE19gj1L91knUPlKYlB11NjoYN5CKJ8YosarCHWzRoCgYUQAvD_BwE',
          description: 'Телевизор YASIN 43G11K 2K FHD может отображать чрезвычайно четкое и детальное изображение.',
          rating: 4.8,
          likes: 0
        },
        {
          id: 3,
          name: 'Умная колонка Яндекс Станция Миди черный',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hbd/h09/84530104467486.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/jandeks-stantsija-midi-chernyi-114709674/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAqrG9BhAVEiwAaPu5zn8qOW5QwEvnSMrlhqs5PJ2J_zDApla-t_Kom5QKjih0MMZN16cPXRoC2IoQAvD_BwE',
          description: 'Яндекс Станция Миди — новая умная колонка с виртуальным ассистентом Алисой.',
          rating: 4.5,
          likes: 0
        }
      ]
    },
    {
      name: 'appliances',
      products: [
        {
          id: 1,
          name: 'Пылесос Deerma DX115C черный',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h93/hcf/63791470936094.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/deerma-dx115c-chernyi-3701430/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAqrG9BhAVEiwAaPu5zn8qOW5QwEvnSMrlhqs5PJ2J_zDApla-t_Kom5QKjih0MMZN16cPXRoC2IoQAvD_BwE',
          description: 'Съемный пылесборник модели при объеме 1.2 л нет необходимости очищать слишком часто. В нем предусмотрен циклонный фильтр.',
          rating: 4.6,
          likes: 0
        },
        {
          id: 2,
          name: 'Электрочайник Yingzheng ZY-305 черный',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h9b/82803977289758.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/elektrochainik-yingzheng-zy-305-chernyi-112526442/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAqrG9BhAVEiwAaPu5zn8qOW5QwEvnSMrlhqs5PJ2J_zDApla-t_Kom5QKjih0MMZN16cPXRoC2IoQAvD_BwE',
          description: 'Современный и стильный, этот электрический чайник сочетает в себе элегантный дизайн.',
          rating: 4.7,
          likes: 0
        },
        {
          id: 3,
          name: 'Микроволновая печь Leadbros D20MXP04-C70-5161B черный',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h99/h64/82552737169438.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/leadbros-d20mxp04-c70-5161b-chernyi-112252983/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAqrG9BhAVEiwAaPu5zn8qOW5QwEvnSMrlhqs5PJ2J_zDApla-t_Kom5QKjih0MMZN16cPXRoC2IoQAvD_BwE',
          description: 'Стильная и компактная модель в черном корпусе, оснащенная удобным механическим управлением.',
          rating: 4.8,
          likes: 0
        },
      ]
    },
    {
      name: 'furniture',
      products: [
        {
          id: 1,
          name: 'Манеж-кровать, продольный маятниковый механизм (0-3)',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/ha7/h73/85720169054238.png?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/manezh-krovat-prodol-nyi-majatnikovyi-mehanizm-ot-0-do-3-h-let-118331778/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAzba9BhBhEiwA7glbap_60b2bF0Mzp-mCfdalfMYF147Wx7uJ0RwXeUwXRDoPW64b7y-O9xoCVSkQAvD_BwE',
          description: 'Манеж-кровать с продольным маятниковым механизмом предназначен для детей от 0 до 3 лет.',
          rating: 4.7,
          likes: 0
        },
        {
          id: 2,
          name: 'Morbido диван прямой Комфорт, 80х210х80 см',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/p0e/1618343.png?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/morbido-divan-prjamoi-komfort-obivka-mikroveljur-80h210h80-sm-bezhevyi-109383093/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAqrG9BhAVEiwAaPu5zn8qOW5QwEvnSMrlhqs5PJ2J_zDApla-t_Kom5QKjih0MMZN16cPXRoC2IoQAvD_BwE',
          description: 'Практичный  диван-кровать с легкой системой трансформации. Каркас изготовлен из ДСП, деревянный брус.',
          rating: 4.8,
          likes: 0
        },
        {
          id: 3,
          name: 'Стул Чили, 86x45x37 см, обивка серый велюр',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h3b/85982139088926.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/stul-chili-86x45x37-sm-obivka-seryi-veljur-109319431/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAqrG9BhAVEiwAaPu5zn8qOW5QwEvnSMrlhqs5PJ2J_zDApla-t_Kom5QKjih0MMZN16cPXRoC2IoQAvD_BwE%27%2C',
          description: 'Стильный и компактный предмет интерьера с мягкой обивкой из серого велюра обеспечивающий комфорт.',
          rating: 4.5,
          likes: 0
        }
      ]
    },
    {
      name: 'dishes',
      products: [
        {
          id: 1,
          name: 'Комплект посуды DS0003 , силикон, голубой',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pee/pfa/19567257.png?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/komplekt-posudy-ds0003-silikon-goluboi-106526923/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAzba9BhBhEiwA7glbaoZcclVni-qXIOE19gj1L91knUPlKYlB11NjoYN5CKJ8YosarCHWzRoCgYUQAvD_BwE',
          description: 'набор из силиконовой посуды голубого цвета, идеально подходящий для безопасного использования в микроволновке и легкого ухода.',
          rating: 4.7,
          likes: 0
        },
        {
          id: 2,
          name: 'Сервиз чайно-столовый 887080 32 в 1',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h16/h03/87001269534750.png?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/serviz-chaino-stolovyi-887080-32-v-1-112066821/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAqrG9BhAVEiwAaPu5zn8qOW5QwEvnSMrlhqs5PJ2J_zDApla-t_Kom5QKjih0MMZN16cPXRoC2IoQAvD_BwE%27%2C',
          description: 'Изящный чайно-столовый сервиз передает всю красоту керамического искусства.Этот изысканный набор столовой посуды станет прекрасным выбором.',
          rating: 4.9,
          likes: 0
        },
        {
          id: 3,
          name: 'Набор казанов Немецкий стиль 3 в 1',
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p6c/pd8/10082725.jpeg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/nabor-kazanov-nemetskii-stil-3-v-1-130541544/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gbraid=0AAAAAC7-v7g7UFTPzl9UecJXI-fp-s5CP&gclid=CjwKCAiAqrG9BhAVEiwAaPu5zn8qOW5QwEvnSMrlhqs5PJ2J_zDApla-t_Kom5QKjih0MMZN16cPXRoC2IoQAvD_BwE%27%2C',
          description: 'Не содержит токсичных покрытий или химических материалов.Посуда из нержавеющей стали не придает блюдам металлического вкуса.',
          rating: 4.8,
          likes: 0
        }
      ]
    }
  ];

  selectedCategory: Category | null = null;

  selectCategory(category: Category){
    this.selectedCategory = category;
  }

  removeProduct(productId: number){
    if(this.selectedCategory){
      this.selectedCategory.products = this.selectedCategory.products.filter(p => p .id !== productId);
    }
  }

  likeProduct(product: Product){
    product.likes += 1;
  }

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
