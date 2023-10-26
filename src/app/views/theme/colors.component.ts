import { AfterViewInit, Component, HostBinding, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { getStyle, rgbToHex } from '@coreui/utils';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  templateUrl: 'colors.component.html'
})
export class ColorsComponent implements OnInit, AfterViewInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {
  }

  public users: IUser[] = [
    {
      name: 'Yiorgos Avraamu',
      state: 'Nouveau',
      registered: '1er Janv, 2023',
      country: 'Us',
      usage: 50,
      period: '11 Juin, 2023 - 10 Juil, 2023',
      payment: 'Mastercard',
      activity: 'Il y a 10 sec',
      avatar: './assets/img/avatars/1.jpg',
      status: 'success',
      color: 'success'
    },
    {
      name: 'Avram Tarasios',
      state: 'Occupé',
      registered: '3 Mars, 2023',
      country: 'Br',
      usage: 10,
      period: '11 Juin, 2023 - 10 Juil, 2023',
      payment: 'Visa',
      activity: 'Il y a 5 minutes',
      avatar: './assets/img/avatars/2.jpg',
      status: 'danger',
      color: 'info'
    },
    {
      name: 'Quintin Ed',
      state: 'Nouveau',
      registered: '1er Janv, 2023',
      country: 'In',
      usage: 74,
      period: '11 Juin, 2023 - 10 Juil, 2023',
      payment: 'Stripe',
      activity: 'Il y a 1 heure',
      avatar: './assets/img/avatars/3.jpg',
      status: 'warning',
      color: 'warning'
    },
    {
      name: 'Enéas Kwadwo',
      state: 'Absent',
      registered: '1er Janv, 2021',
      country: 'Fr',
      usage: 98,
      period: '11 Juin, 2023 - 10 Juil, 2023',
      payment: 'Paypal',
      activity: 'Le mois dernier',
      avatar: './assets/img/avatars/4.jpg',
      status: 'secondary',
      color: 'danger'
    },
    {
      name: 'Agapetus Tadeáš',
      state: 'Nouveau',
      registered: '1er Janv, 2023',
      country: 'Es',
      usage: 22,
      period: '11 Juin, 2023 - 10 Juil, 2023',
      payment: 'ApplePay',
      activity: 'La semaine dernière',
      avatar: './assets/img/avatars/5.jpg',
      status: 'success',
      color: 'primary'
    },
    {
      name: 'Friderik Dávid',
      state: 'Nouveau',
      registered: '1er Janv, 2023',
      country: 'Pl',
      usage: 43,
      period: '11 Juin, 2023 - 10 Juil, 2023',
      payment: 'Amex',
      activity: 'Hier',
      avatar: './assets/img/avatars/6.jpg',
      status: 'info',
      color: 'dark'
    }
  ];

  public themeColors(): void {
    Array.from(this.document.querySelectorAll('.theme-color')).forEach(
      (element: Element) => {
        const htmlElement = element as HTMLElement;
        const background = getStyle('background-color', htmlElement) ?? '#fff';
        const table = this.renderer.createElement('table');
        table.innerHTML = `
          <table class="table w-100">
            <tr>
              <td class="text-muted">HEX:</td>
              <td class="font-weight-bold">${rgbToHex(background)}</td>
            </tr>
            <tr>
              <td class="text-muted">RGB:</td>
              <td class="font-weight-bold">${background}</td>
            </tr>
          </table>
        `;
        this.renderer.appendChild(htmlElement.parentNode, table);
        // @ts-ignore
        // el.parentNode.appendChild(table);
      }
    );
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.themeColors();
  }
}

@Component({
  selector: 'app-theme-color',
  template: `
    <c-col xl="2" md="4" sm="6" xs="12" class="my-4 ms-4">
      <div [ngClass]="colorClasses" style="padding-top: 75%;"></div>
      <ng-content></ng-content>
    </c-col>
  `
})
export class ThemeColorComponent implements OnInit {
  @Input() color = '';
  public colorClasses = {
    'theme-color w-75 rounded mb-3': true
  };

  @HostBinding('style.display') display = 'contents';

  ngOnInit(): void {
    this.colorClasses = {
      ...this.colorClasses,
      [`bg-${this.color}`]: !!this.color
    };
  }
}

