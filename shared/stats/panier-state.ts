import { NgxsModule,Action,Selector,State, StateContext } from '@ngxs/store';
import { PanierStateModel } from './panier-state-model';
import { AddHotel } from '../actions/article-action';
import { DelHotel } from '../actions/article-delaction';

@State<PanierStateModel>({
    name: 'panier',
    defaults: {
        panier: []
    }
})

export class PanierState {

  @Selector()
    static getPanier(state: PanierStateModel) {
        return state.panier;
    }

@Action(AddHotel)
    add({getState, patchState }: StateContext<PanierStateModel>, { payload }: AddHotel) {
        const state = getState();
        patchState({
            panier: [...state.panier, payload]
        });
    }

    @Action(DelHotel)
    del ({getState, patchState }: StateContext<PanierStateModel>, { payload }: DelHotel) {
        const state = getState();
        
        patchState({
            panier: [...(state.panier.slice(0,-1))]
        });
    }   
}
