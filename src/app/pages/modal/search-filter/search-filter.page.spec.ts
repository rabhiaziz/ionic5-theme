import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchFilterPage } from './search-filter.page';

describe('SearchFilterPage', () => {
  let component: SearchFilterPage;
  let fixture: ComponentFixture<SearchFilterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFilterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchFilterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
