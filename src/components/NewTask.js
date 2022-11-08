import React from 'react'

const NewTask = () => {
  return (
    <Modal
      className='modal'
      open={openModal}
      onClose={handleCloseModel}
      aria-labelledby='modal-edit-task'
      aria-describedby='modal-edit-task-details'>
    
        <Typography
            id='modal-modal-title'
            variant='h5'
            component='h3'
            gutterBottom>
            Task Details
          </Typography>

          <form
            noValidate
            autoComplete='off'
            onSubmit={handleSubmit}
            className='form task-form padding-top'>
            <TitleField title={name} setTitle={setName} labelName='Task Name' />

            <FormGroup className='task-input'>
              <InputLabel id='list-label'>List:</InputLabel>
              <Select
                labelId='list-label'
                id='list-select'
                value={boardId}
                label='list'
                variant='standard'
                onChange={(event) => setBoardId(event.target.value)}>
                {boards
                  ? boards.map((b) => {
                      return (
                        <MenuItem value={b.id} key={`board-option-${b.id}`}>
                          {b.name}
                        </MenuItem>
                      )
                    })
                  : null}
              </Select>
            </FormGroup>

            <div className='padding-bottom-lg'>
              <TextField
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                label='description'
                variant='outlined'
                color='secondary'
                fullWidth
                multiline
                rows={5}
              />
            </div>

            <SaveButton title={task ? 'Save Task' : 'Create Task'} />
          </form>
        </div>
      </LocalizationProvider>
    </Modal>
  )
}

export default NewTask