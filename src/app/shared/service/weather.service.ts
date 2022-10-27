import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWeather } from '../model/weather.model';
import { IForecast } from '../model/forecast.model';

const API_KEY = 'e830fed24f7d21455e85ff79d0e97c26';
const API_URL = 'https://api.openweathermap.org/data/2.5/';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  public flag = false;

  constructor(private httpClient: HttpClient) {}

  getWeatherbyCityName(cityName: string): Observable<IWeather> {
    return this.httpClient.get<IWeather>(
      `${API_URL}weather?q=${cityName}&appid=${API_KEY}&units=metric`
    );
  }

  getFiveDayForecastbyCityName(cityName: string): Observable<IForecast> {
    return this.httpClient.get<IForecast>(
      `${API_URL}forecast?q=${cityName}&appid=${API_KEY}&units=metric`
    );
  }
}
