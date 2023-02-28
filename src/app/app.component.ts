import { RegionsService } from './regions.service'
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import User from './models/user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users$: Observable<User[]> | undefined
  constructor (private readonly regionsService: RegionsService) {}

  ngOnInit (): void {
  }

  showUsers (): void {
    this.users$ = this.regionsService.getUsers()
  }

  reloadPage (): void {
    location.reload()
  }
}
