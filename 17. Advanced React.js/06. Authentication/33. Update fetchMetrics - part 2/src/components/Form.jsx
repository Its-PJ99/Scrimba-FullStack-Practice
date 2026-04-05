import { useActionState } from 'react';
import supabase from '../supabase-client';
import { useAuth } from '../context/AuthContext';

function Form() {
  const { users, session } = useAuth();

  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const submittedName = formData.get('name');
      const user = users.find((u) => u.name === submittedName);

      const newDeal = {
        user_id: user.id,
        value: formData.get('value'),
      };
      console.log('newDeal', newDeal);
      const { error } = await supabase.from('sales_deals').insert(newDeal);
      if (error) {
        console.error('Error adding deal: ', error.message);
        return new Error('Failed to add deal');
      }

      return null;
    },
    null
  );

  const currentUser = users.find((u) => u.id === session?.user?.id);

  const generateOptions = () => {
    return users
      .filter((user) => user.account_type === 'rep')
      .map((user) => (
        <option key={user.id} value={user.name}>
          {user.name}
        </option>
      ));
  };

  return (
    <div className="add-form-container">
      <form
        action={submitAction}
        aria-label="Add new sales deal"
        aria-describedby="form-description"
      >
        <div id="form-description" className="sr-only">
          Use this form to add a new sales deal. Select a sales rep and enter
          the amount.
        </div>

        {currentUser?.account_type === 'rep' ? (
          <label htmlFor="deal-name">
            Name:
            <input
              id="deal-name"
              type="text"
              name="name"
              value={currentUser?.name || ''}
              readOnly
              className="rep-name-input"
              aria-label="Sales representative name"
              aria-readonly="true"
            />
          </label>
        ) : (
          <label htmlFor="deal-name">
            Name:
            <select
              id="deal-name"
              name="name"
              defaultValue={users[0]?.name || ''}
              aria-required="true"
              aria-invalid={error ? 'true' : 'false'}
              disabled={isPending}
            >
              {generateOptions()}
            </select>
          </label>)
        }

        <label htmlFor="deal-value">
          Amount: $
          <input
            id="deal-value"
            type="number"
            name="value"
            defaultValue={0}
            className="amount-input"
            min="0"
            step="10"
            aria-required="true"
            aria-invalid={error ? 'true' : 'false'}
            aria-label="Deal amount in dollars"
            disabled={isPending}
          />
        </label>

        <button
          type="submit"
          disabled={isPending}
          aria-busy={isPending}
        >
          {isPending ? 'Adding...' : "Add Deal"}
        </button>
      </form>

      {error && (
        <div role='alert' className="error-message">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default Form;
