import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createOrphanages1602627425536 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // REALIZAR ALTERAÇOES
    // CRIAR TABELA, CRIAR UM NOVO CAMPO, DELETAR ALGUM CAMPO
    await queryRunner.createTable(
      new Table({
        name: 'orphanages',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'longitude',
            type: 'varchar',

          },
          {
            name: 'latitude',
            type: 'varchar',
          },
          {
            name: 'about',
            type: 'text',
          },
          {
            name: 'instructions',
            type: 'text',
          },
          {
            name: 'opening_hours',
            type: 'varchar',
          },
          {
            name: 'open_on_weekends',
            type: 'boolean',
            default: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // DESFAZER O QUE FOI FEITO UP
    await queryRunner.dropTable('orphanages');
  }
}
