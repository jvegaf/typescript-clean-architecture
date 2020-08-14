import { ID } from '../../../../app/Shared/Definitions/id';
import { Presenter, PresenterOutput } from '../../../../app/Shared/Definitions/presenter';
import { SignupOutput } from '../../../../app/signup/signup.out';

export interface SignupPresenterOutput extends PresenterOutput {
  id: ID;
}

export interface SignupPresenter extends Presenter<SignupOutput> {
  present(data: SignupOutput): Promise<SignupPresenterOutput>;
}
