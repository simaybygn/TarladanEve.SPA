import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit{
  
  expandedIndex = 0;
  aboutUsDatas : DataForAboutUs[] = AboutUsDatas;
  constructor(){}

  ngOnInit(): void {
      
  }
}

export interface DataForAboutUs{
  question:string;
  description:string;
}

export const AboutUsDatas:DataForAboutUs[]=[
  {
    question:"Biz Kimiz ?",description:"Ben Kocaeli Üniversitesi elektronik ve haberleşme mühendisliği son sınıf öğrencisi Simay Baygın.Yazılım alanında kariyer hedefim var ve aktif olarak Acıbadem Technology şirketinde Yazılım Uzman Yardımcısı olarak çalışmaktayım."
  },
  {
    question:"Hedefimiz Ne ?",description:"Hedefim zorlu şartlar altında çalışan ve emeği aracılar tarafından sömürülen çiftçiye bir umut olmak.Tarım açısından oldukça zengin olan ülkemizde olumsuz şartlar nedeniyle mesleğini yapamayan çiftçilerimizi ve dalında çürümeye yüz tutan bu toprağın mahsüllerini bu ülkeye teknoloji aracılığıyla tekrardan kazandırmak istiyorum."
  },
  {
    question:"Ortaklarımız Kimler ?",description:"Bu süreçte tek ortağımız emekçi çiftçilerimiz."
  },
  {
    question:"Neden Biz ?",description:"Bize güvenebilirsiniz çünkü bu işi bireysel kâr amaçlarım için değil canım ülkemin güzel topraklarına bir damla su olabilmek için ücretsiz bir şekilde yapıyorum."
  }
]

