package keeper_test

import (
	"context"
	"log"
	"os"
	"testing"
	keepertest "university_chain_it/testutil/keeper"
	"university_chain_it/x/universitychainit"
	"university_chain_it/x/universitychainit/keeper"
	"university_chain_it/x/universitychainit/testutil"
	"university_chain_it/x/universitychainit/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func setupMsgServerConfigureChain(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.UniversitychainitKeeper(t)
	universitychainit.InitGenesis(ctx, *k, *types.DefaultGenesis())
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}

func TestConfigureChain(t *testing.T) {
	msgServer, context := setupMsgServerConfigureChain(t)

	err := os.Chdir("/university_chain_it")
	if err != nil {
		log.Println(err)
	}

	createResponse, err := msgServer.ConfigureChain(context, &types.MsgConfigureChain{
		Creator: testutil.Bob,
	})
	require.Nil(t, err)
	require.EqualValues(t, types.MsgConfigureChainResponse{
		Status: 0,
	}, *createResponse)
}

func TestConfigureChainWrongCreator(t *testing.T) {
	msgServer, context := setupMsgServerConfigureChain(t)
	createResponse, err := msgServer.ConfigureChain(context, &types.MsgConfigureChain{
		Creator: testutil.Alice,
	})
	require.EqualError(t,
		err,
		"the key entered does not match the chain administrator's key")
	require.EqualValues(t, types.MsgConfigureChainResponse{
		Status: -1,
	}, *createResponse)
}

func TestConfigureChainJustConfigured(t *testing.T) {
	msgServer, context := setupMsgServerConfigureChain(t)

	createResponse, err := msgServer.ConfigureChain(context, &types.MsgConfigureChain{
		Creator: testutil.Bob,
	})
	require.Nil(t, err)

	createResponse, err = msgServer.ConfigureChain(context, &types.MsgConfigureChain{
		Creator: testutil.Bob,
	})

	require.EqualError(t,
		err,
		"the initial configuration of the chain has already been performed")
	require.EqualValues(t, types.MsgConfigureChainResponse{
		Status: -1,
	}, *createResponse)
}
