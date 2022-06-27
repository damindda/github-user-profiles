import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GitHubUsersService } from './git-hub-users.service';

describe('GitHubUsersService', () => {
  let service: GitHubUsersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
    .compileComponents();
  });


  beforeEach(() => {
    service = TestBed.inject(GitHubUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
