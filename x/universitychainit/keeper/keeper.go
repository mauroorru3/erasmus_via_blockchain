package keeper

import (
	"fmt"

	"github.com/tendermint/tendermint/libs/log"

	"university_chain_it/x/universitychainit/types"

	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	paramtypes "github.com/cosmos/cosmos-sdk/x/params/types"
	"github.com/ignite-hq/cli/ignite/pkg/cosmosibckeeper"
)

type (
	Keeper struct {
		*cosmosibckeeper.Keeper
		cdc        codec.BinaryCodec
		storeKey   sdk.StoreKey
		memKey     sdk.StoreKey
		paramstore paramtypes.Subspace
		bank       types.BankEscrowKeeper
	}
)

func NewKeeper(
	bank types.BankEscrowKeeper,
	cdc codec.BinaryCodec,
	storeKey,
	memKey sdk.StoreKey,
	ps paramtypes.Subspace,
	channelKeeper cosmosibckeeper.ChannelKeeper,
	portKeeper cosmosibckeeper.PortKeeper,
	scopedKeeper cosmosibckeeper.ScopedKeeper,

) *Keeper {
	// set KeyTable if it has not already been set
	if !ps.HasKeyTable() {
		ps = ps.WithKeyTable(types.ParamKeyTable())
	}

	return &Keeper{
		bank: bank,
		Keeper: cosmosibckeeper.NewKeeper(
			types.PortKey,
			storeKey,
			channelKeeper,
			portKeeper,
			scopedKeeper,
		),
		cdc:        cdc,
		storeKey:   storeKey,
		memKey:     memKey,
		paramstore: ps,
	}
}

func (k Keeper) Logger(ctx sdk.Context) log.Logger {
	return ctx.Logger().With("module", fmt.Sprintf("x/%s", types.ModuleName))
}
