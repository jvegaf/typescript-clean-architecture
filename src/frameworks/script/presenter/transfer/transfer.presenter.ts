import { ID } from '../../../../app/Shared/Definitions/id'
import { Presenter, PresenterOutput } from '../../../../app/Shared/Definitions/presenter'
import { TransferOutput } from '../../../../app/transfer/transfer.out'

export interface TransferPresenterOutput extends PresenterOutput {
  id: ID
}

export interface TransferPresenter extends Presenter<TransferOutput> {
  present(data: TransferOutput): Promise<TransferPresenterOutput>
}
