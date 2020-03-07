import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { ExtendedEntity } from '../shared';
import { UserEntity } from 'src/user/user.entity';
import { PostEntity } from 'src/post/post.entity';
import { PostVoteEntity } from 'src/post/post-vote.entity';

@Entity({ name: 'comments' })
export class CommentEntity extends ExtendedEntity {
  @Column('text')
  text!: string;

  @Column({ type: 'integer', unsigned: true, nullable: true })
  parentId!: number | null;

  @ManyToOne(
    () => UserEntity,
    user => user.comments,
  )
  user!: UserEntity;

  @ManyToOne(
    () => PostEntity,
    post => post.comments,
  )
  post!: PostEntity;

  @OneToMany(
    () => PostVoteEntity,
    postVote => postVote.post,
  )
  votes!: number;
}