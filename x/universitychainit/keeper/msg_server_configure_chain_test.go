package keeper_test

import (
	"testing"
	"university_chain_it/x/universitychainit/testutil"
	"university_chain_it/x/universitychainit/types"

	"github.com/stretchr/testify/require"
)

func TestConfigureChain(t *testing.T) {
	msgServer, context := setupMsgServer(t)
	createResponse, err := msgServer.ConfigureChain(context, &types.MsgConfigureChain{
		Creator: testutil.Alice,
	})
	require.Nil(t, err)
	require.EqualValues(t, types.MsgConfigureChainResponse{
		Status: 0, // TODO: update with a proper value when updated
	}, *createResponse)
}
