import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface State {
    position: number;
    bulletPosition: number;
    shoot: boolean;
}

const initialState: State = {
    position: window.innerWidth / 2 - 100,
    bulletPosition: 0,
    shoot: false
};

export const shooterSlice = createSlice({
    name: "shooter",
    initialState,
    reducers: {
        move(state, action: PayloadAction<string>) {
            switch (action.payload) {
                case "Left":
                    state.position = state.position - 10;
                    break;
                case "Right":
                    state.position = state.position + 10;
                    break;
            }
        },
        shoot(state) {
            state.bulletPosition = state.position
            state.shoot = true;
        },
        hit(state) {
            state.shoot = false;
        }
    },
});

export const { move, shoot, hit } = shooterSlice.actions;
export default shooterSlice.reducer;